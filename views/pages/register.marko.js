// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/pages/register.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form action=\"/register\" method=\"post\"><div class=\"form-group\"><label for=\"first_name\">First Name</label><input class=\"form-control\" type=\"text\" name=\"first_name\" id=\"first_name\"></div><div class=\"form-group\"><label for=\"last_name\">Last Name</label><input type=\"text\" class=\"form-control\" name=\"last_name\" id=\"last_name\"></div><div class=\"form-group\"><label for=\"street_address\">Street Address</label><input type=\"text\" class=\"form-control\" name=\"street_address\" id=\"street_address\"></div><div class=\"form-group\"><label for=\"city\">city</label><input type=\"text\" class=\"form-control\" name=\"city\" id=\"city\"></div><div class=\"form-group\"><label for=\"state\">state</label><input type=\"text\" class=\"form-control\" name=\"state\" id=\"state\"></div><div class=\"form-group\"><label for=\"zip\">zip</label><input type=\"number\" class=\"form-control\" name=\"zip\" id=\"zip\"></div><div class=\"form-group\"><label for=\"usertype\">User Type</label><select class=\"form-control\" name=\"usertype\" id=\"usertype\"><option value=\"Student\">Student</option><option value=\"Instructor\">Instructor</option></select></div><div class=\"form-group\"><label for=\"username\">username</label><input class=\"form-control\" type=\"text\" name=\"username\" id=\"username\"></div><div class=\"form-group\"><label for=\"email\">email</label><input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\"></div><div class=\"form-group\"><label for=\"password\">Password</label><input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\"></div><input id=\"submitform\" class=\"btn btn-primary\" type=\"submit\" value=\"Submit\"> </form><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/pages/register.marko"
  };
