// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/pages/addlesson.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var class_id = input.pageData.class_id;

  var action = `/classes/${class_id}/add`

  out.w("<form method=\"post\"" +
    marko_attr("action", action) +
    "><div class=\"form-group\"><label for=\"lesson_number\">Lesson Number</label><input name=\"lesson_number\" class=\"form-control\" type=\"Number\" id=\"lesson_number\"></div><div class=\"form-group\"><label for=\"lesson_title\">Lesson Title</label><input name=\"lesson_title\" class=\"form-control\" type=\"text\" id=\"lesson_title\"></div><div class=\"form-group\"><label for=\"lesson_body\">Lesson Body</label><textarea name=\"lesson_body\" class=\"form-control\" id=\"lesson_body\"></textarea></div><input type=\"submit\" value=\"add lesson\"></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/pages/addlesson.marko"
  };
