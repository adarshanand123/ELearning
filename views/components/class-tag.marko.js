// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/components/class-tag.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var classData = input.classData;

  out.w("<h1>" +
    marko_escapeXml(classData.title) +
    "</h1><p>" +
    marko_escapeXml(classData.description) +
    "</p>");

  var href = `/classes/${classData._id}`

  out.w("<a class=\"btn btn-primary\"" +
    marko_attr("href", href) +
    ">See Details</a>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/components/class-tag.marko"
  };
