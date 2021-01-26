import { WebPlugin } from '@capacitor/core';
import { balyaPlugin } from './definitions';

export class balyaWeb extends WebPlugin implements balyaPlugin {
  constructor() {
    super({
      name: 'balya',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const balya = new balyaWeb();

export { balya };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(balya);
