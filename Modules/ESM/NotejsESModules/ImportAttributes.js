// Import Attributes

// Import attributes are an inline syntax for module import statements to pass on more information alongside the module specifier.

import fooData from './foo.json' with { type: 'json' };

const { default: barData } =
  await import('./bar.json', { with: { type: 'json' } });

// Node.js only supports the type attribute, for which it supports the following values:

// Attribute type	Needed for
// 'json'	JSON modules

// The type: 'json' attribute is mandatory when importing JSON modules.
