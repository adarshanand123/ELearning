// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/pages/classDetails.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  var classData = input.pageData.classDetails;

  out.w("<h1>" +
    marko_escapeXml(classData.title) +
    "</h1><h3>" +
    marko_escapeXml(classData.instructor) +
    "</h3><p>" +
    marko_escapeXml(classData.description) +
    "</p>");

  if (!out.global.req.user) {
    var href = `/register`;

    out.w("<a class=\"btn btn-primary\"" +
      marko_attr("href", href) +
      ">Sign Up to Register</a> ");
  } else if (!out.global.res.locals.class) {
    var action = `/classes/register`;

    out.w("<form" +
      marko_attr("action", action) +
      " method=\"post\"><input type=\"hidden\" name=\"class_id\"" +
      marko_attr("value", classData._id.toString()) +
      "><input type=\"hidden\" name=\"class_title\"" +
      marko_attr("value", classData.title) +
      "><input type=\"submit\" class=\"btn btn-primary\" value=\"Register for this class\"></form> ");
  } else {
    marko_forEach(classData.lessons, function(lessons) {
      out.w("<span>" +
        marko_escapeXml(lessons.lesson_number) +
        "</span><h3>" +
        marko_escapeXml(lessons.lesson_title) +
        "</h3><p>" +
        marko_escapeXml(lessons.lesson_body) +
        "</p>");
    });
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/pages/classDetails.marko"
  };
