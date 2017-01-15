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
        if (req.status == 200) {
          const data = JSON.parse(req.responseText);
          cb && cb(null, data.result);
        } else {
          cb && cb(status);
        }
      }
    }
    req.open('POST', this.url);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({ childId: this.child, gameId: this.game, interval: interval || 0 }));
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
    this._isready = true;
    const now = new Date();
    this.preLoaded = now.getTime()
    this.setWeights(data)
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