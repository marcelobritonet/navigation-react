function ContainerFactory(params) {
    const initial = {
        alias: '',
        active: false,
        ref: {},
        top: '',
        bottom: '',
        left: '',
        right: '',
        hide: false
    };

    return {
        ...initial,
        ...params
    }
}

function HighlightFactory(params) {
    const initial = {
        label: '',
        icon: '',
        active: false
    };

    return {
        ...initial,
        ...params
    }
}

function TrailsFactory(params) {
    const initial = {
        name: '',
        cover: '',
        active: false
    };

    return {
        ...initial,
        ...params
    }
}

export {
    ContainerFactory,
    HighlightFactory,
    TrailsFactory
};
