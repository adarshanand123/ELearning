// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/pages/classes.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    class_tag_template = marko_loadTemplate(require.resolve("../components/class-tag.marko")),
    marko_loadTag = marko_helpers.t,
    class_tag_tag = marko_loadTag(class_tag_template),
    login_tag_template = marko_loadTemplate(require.resolve("../components/login-tag.marko")),
    login_tag_tag = marko_loadTag(login_tag_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var pageData = input.pageData;

  out.w("<div class=\"row\"><div class=\"col-9\">");

  marko_forEach(pageData.classes, function(classData) {
    class_tag_tag({
        classData: classData
      }, out, __component, "2");
  });

  out.w("</div><div class=\"col-3\">");

  if (!out.global.req.user) {
    login_tag_tag({}, out, __component, "4");
  } else {
    var href = `/userMyClasses/`

    out.w("<div><a" +
      marko_attr("href", href) +
      ">My Classes</a></div><div><a href=\"/login/logout\">log out</a></div>");
  }

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/pages/classes.marko",
    tags: [
      "../components/class-tag.marko",
      "../components/login-tag.marko"
    ]
  };
