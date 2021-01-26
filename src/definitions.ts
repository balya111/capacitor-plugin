declare module '@capacitor/core' {
  interface PluginRegistry {
    balya: balyaPlugin;
  }
}

export interface balyaPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
