FROM alpine:edge

ENV OTSIMOCTL_VERSION=v0.10.1

RUN apk add --update ca-certificates python2 py2-pip git nodejs yarn groff \
    && pip install awscli --upgrade --user \
    && wget -O /usr/local/bin/otsimoctl https://github.com/otsimo/otsimoctl/releases/download/$OTSIMOCTL_VERSION/otsimoctl-linux-amd64 \
    && chmod +x /usr/local/bin/otsimoctl \
    && rm -rf /var/cache/apk/* /pipcache

ADD . /opt/otsimo
ENV "PYTHONPATH"="/opt/otsimo"
ENV "PATH"="${PATH}:./root/.local/bin"

ENTRYPOINT ["node", "/opt/otsimo/generator.js"]
