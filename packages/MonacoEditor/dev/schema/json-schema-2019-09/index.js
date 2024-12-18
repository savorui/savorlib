'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const metaSchema = require('./schema.json');
const applicator = require('./meta/applicator.json');
const content = require('./meta/content.json');
const core = require('./meta/core.json');
const format = require('./meta/format.json');
const metadata = require('./meta/meta-data.json');
const validation = require('./meta/validation.json');
const META_SUPPORT_DATA = ['/properties'];
function addMetaSchema2019($data) {
  [
    metaSchema,
    applicator,
    content,
    core,
    with$data(this, format),
    metadata,
    with$data(this, validation),
  ].forEach((sch) => this.addMetaSchema(sch, undefined, false));
  return this;
  function with$data(ajv, sch) {
    return $data ? ajv.$dataMetaSchema(sch, META_SUPPORT_DATA) : sch;
  }
}
exports.default = addMetaSchema2019;
//# sourceMappingURL=index.js.map
