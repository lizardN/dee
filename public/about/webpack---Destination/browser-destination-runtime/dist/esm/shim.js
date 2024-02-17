export function browserDestination(definition) {
    const factory = (async (settings) => {
        const plugin = await
        import ('./plugin');
        return plugin.generatePlugins(definition, settings, settings.subscriptions || []);
    });
    factory.pluginName = definition.name;
    return factory;
}
//# sourceMappingURL=shim.js.map