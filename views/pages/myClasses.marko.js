// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/pages/myClasses.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var userClassesData = input.pageData.userClasses;

  out.w("<table class=\"table\"><thead class=\"thead-light\"><tr><th scope=\"col\">ClasId</th><th scope=\"col\">ClassTitle</th><th scope=\"col\"></th></tr></thead><tbody>");

  marko_forEach(userClassesData, function(userClassData) {
    out.w("<tr><td>" +
      marko_escapeXml(userClassData.class_id) +
      "</td><td>" +
      marko_escapeXml(userClassData.class_title) +
      "</td>");

    var href = `/classes/${userClassData.class_id}`

    out.w("<td><a" +
      marko_attr("href", href) +
      ">View lessons </a></td>");

    if (out.global.req.user.usertype != "Student") {
      var href = `/classes/${userClassData.class_id}/add`

      out.w("<td><a" +
        marko_attr("href", href) +
        ">Add lesson </a></td>");
    }

    out.w("</tr>");
  });

  out.w("</tbody></table>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/pages/myClasses.marko"
  };
