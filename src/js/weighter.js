
import Otsimo, { callbacks } from 'otsimo';

/**
 * Interface for weight providers
 * 
 * @export
 * @class AbstractWeightProvider
 */
export class AbstractWeightProvider {
  /*eslint-disable*/
  /**
   * 
   * 
   * @param {number} interval
   * @param {Function} cb
   * 
   * @memberOf AbstractWeightProvider
   */
  fetch(interval, cb) { }
  /*eslint-enable*/
}

/**
 * Weight information comes from native app
 * 
 * @export
 * @class NativeProvider
 * @extends {AbstractWeightProvider}
 */
export class NativeProvider extends AbstractWeightProvider {
  fetch(interval, cb) {
    setTimeout(() => {
      cb(new Error('not implemented'))
    }, 10);
  }
}

/**
 * Local provider calculates weight from data kept locally
 * 
 * @export
 * @class LocalProvider
 * @extends {AbstractWeightProvider}
 */
export class LocalProvider extends AbstractWeightProvider {
  fetch(interval, cb) {
    setTimeout(() => {
      cb(new Error('not implemented'))
    }, 10);
  }
}


/**
 * 
 * 
 * @export
 * @class RemoteProvider
 * @extends {AbstractWeightProvider}
 */
export class RemoteProvider extends AbstractWeightProvider {
  /**
   * Creates an instance of RemoteProvider.
   * 
   * @param {string} remoteUrl
   * 
   * @memberOf RemoteProvider
   */
  constructor(remoteUrl, childId, gameId) {
    super()
    this.url = remoteUrl
    this.child = childId
    this.game = gameId
  }

  fetch(interval, cb) {
    const req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        if (req.status === 200) {
          try {
            const data = JSON.parse(req.responseText);
            cb(null, data.result);
          } catch (err) {
            cb(err);
          }
        } else {
          cb(`failed to fetch: status=${status}, response=${req.responseText}`);
        }
      }
    }
    req.open('POST', this.url);
    req.setRequestHeader('Content-Type', 'application/json');

    interval = Math.floor(interval)
    req.send(JSON.stringify({ childId: this.child, gameId: this.game, interval: `${interval}` }));
  }
}


/**
 * 
 * 
 * @export
 * @class Weighter
 */
export class Weighter {

  /**
   * Creates an instance of Weighter.
   * 
   * @param {AbstractWeightProvider} provider
   * 
   * @memberOf Weighter
   */
  constructor(provider) {
    this.provider = provider
    this._isready = false
    this.weights = [];
    this.preLoaded = 0
    this.kinds = new Map();
  }

  get ready() {
    return this._isready;
  }

  reload() {
    if (!this.provider) {
      console.warn('provider is not set')
      return
    }
    let i = 0
    if (this.preLoaded !== 0) {
      const now = new Date();
      i = (now.getTime() - this.preLoaded) / 1000
    }
    this.provider.fetch(i, this.onFetch.bind(this))
  }

  /**
   * 
   * @private
   * @param {Error} err
   * @param {ItemWeight[]} data
   * 
   * @memberOf Weighter
   */
  onFetch(err, data) {
    if (err) {
      console.error(err)
      return;
    }
    if (data) {
      this._isready = true;
      const now = new Date();
      this.preLoaded = now.getTime()
      this.setWeights(data)
    } else {
      console.error(`result data is ${data}`);
    }
  }

  /**
   * 
   * @private
   * @param {ItemWeight[]} w
   * 
   * @memberOf Weighter
   */
  setWeights(w) {
    this.weights = w
    for (const ww of w) {
      this.kinds.set(ww.itemId, ww.weight)
    }
  }
}

export class MAWeighter {
  /**
   * 
   * 
   * @param {string[]} mats 
   * 
   * @memberof MAWeighter
   */
  setMaterials(mats, cb) {
    console.log("setMaterials", mats);
    if (!otsimo.isWKWebView) {
      return;
    }
    let key = "weights-" + otsimo.manifest.unique_name;
    let id = callbacks.store('ma', (id, result) => {
      callbacks.remove(id);
      console.log("setMaterials result", result);
      if (!result.error) {
        window.localStorage.setItem(key, JSON.stringify(mats))
      }
      cb(result.error);
    });
    window.webkit.messageHandlers.ma.postMessage(JSON.stringify({
      rpc: "add",
      callback: id,
      materials: mats,
    }));
  }


  /**
   * 
   * 
   * @memberof MAWeighter
   */
  next(cb) {
    if (!otsimo.isWKWebView) {
      return;
    }
    console.log("weighter next called");
    let id = callbacks.store('ma', (id, result) => {
      console.log("weighter next", result);
      callbacks.remove(id);
      if (result.error) {
        return cb(result.error);
      }
      if (typeof result.elem === "undefined" ||
        typeof result.elem.material == "undefined" ||
        result.elem.material == "") {
        return cb("undefined material");
      } else {
        cb(null, result.elem);
      }
    });
    window.webkit.messageHandlers.ma.postMessage(JSON.stringify({
      rpc: "next",
      callback: id,
    }));
  }

  /**
   * 
   * 
   * @memberof MAWeighter
   */
  grade(material, grade, cb) {
    console.log("weighter grade", material, grade);
    if (!otsimo.isWKWebView) {
      return;
    }
    let id = callbacks.store('ma', (id, result) => {
      console.log("weighter grade result", material, grade, result);
      callbacks.remove(id);
      cb(result.error);
    });
    window.webkit.messageHandlers.ma.postMessage(JSON.stringify({
      rpc: "grade",
      callback: id,
      material: material,
      grade: grade,
    }));
  }

  stats(cb) {
    console.log("weighter stat");
    if (!otsimo.isWKWebView) {
      return;
    }
    let id = callbacks.store('ma', (id, result) => {
      console.log("weighter stat result", result);
      callbacks.remove(id);
      cb(result);
    });
    window.webkit.messageHandlers.ma.postMessage(JSON.stringify({
      rpc: "stats",
      callback: id,
    }));
  }

}