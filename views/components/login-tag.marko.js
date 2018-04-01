// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/components/login-tag.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1>Student and Instructor Login</h1><form action=\"/login\" method=\"post\"><div class=\"form-group\"><label for=\"username\">Username:</label><input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Enter username\"></div><div class=\"form-group\"><label for=\"password\">Password:</label><input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\"></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/components/login-tag.marko"
  };
