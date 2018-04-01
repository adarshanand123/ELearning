// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    header_tag_template = marko_loadTemplate(require.resolve("./components/header-tag.marko")),
    header_tag_tag = marko_loadTag(header_tag_template),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><title>E-Learning System</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/bootstrap.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/bootstrap.css.map\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/style.css\"><script type=\"text/javascript\" src=\"/js/bootstrap.js\"></script><script type=\"text/javascript\" src=\"/js/bootstrap.js.map\"></script></head><body>");

  component_globals_tag({}, out);

  header_tag_tag({}, out, __component, "9");

  var filePath = require(input.pageData.filename);

  include_tag({
      _target: filePath,
      _arg: {
          pageData: input.pageData
        }
    }, out, __component, "10");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "11");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "./components/header-tag.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
