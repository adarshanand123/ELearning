// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/elearning$0.0.0/views/pages/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    login_tag_template = marko_loadTemplate(require.resolve("../components/login-tag.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    login_tag_tag = marko_loadTag(login_tag_template),
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    class_tag_template = marko_loadTemplate(require.resolve("../components/class-tag.marko")),
    class_tag_tag = marko_loadTag(class_tag_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"row\"><div class=\"homeContainer col-9\"><h1>Welcome to eLearn</h1><p>ELearning is simple and free online learning platform,whrere instructors can create courses,and students can register for courses.</p>");

  if (!out.global.req.user) {
    out.w("<a class=\"btn btn-primary\" href=\"/register\">Sign Up for Free</a><p>You need to sign up to register for free classes.</p>");
  }

  out.w("</div><div class=\"col-3\">");

  if (!out.global.req.user) {
    login_tag_tag({}, out, __component, "7");
  } else {
    var href = `/userMyClasses/`

    out.w("<div><a" +
      marko_attr("href", href) +
      ">My Classes</a></div><div><a href=\"/login/logout\">log out</a></div>");
  }

  out.w("</div></div>");

  var pageData = input.pageData;

  out.w("<footer class=\"row\">");

  marko_forEach(pageData.classes, function(classData) {
    out.w("<div class=\"col-4\">");

    class_tag_tag({
        classData: classData
      }, out, __component, "14");

    out.w("</div>");
  });

  out.w("</footer>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/elearning$0.0.0/views/pages/home.marko",
    tags: [
      "../components/login-tag.marko",
      "../components/class-tag.marko"
    ]
  };
