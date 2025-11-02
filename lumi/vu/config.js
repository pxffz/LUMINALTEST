    self.__uv$config = {
        prefix: '/lumi/nal/',
        bare: "/bare/",
        encodeUrl: Ultraviolet.codec.plain.encode,
        decodeUrl: Ultraviolet.codec.plain.decode,
        handler: '/lumi/vu/handler.js',
        bundle: '/lumi/vu/bundle.js',
        config: '/lumi/vu/config.js',
        sw: '/lumi/vu/sw.js',
    };
