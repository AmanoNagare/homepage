const amanonagareIndexHtml = document.createElement("div");
amanonagareIndexHtml.setAttribute("id", "amanonagare_index_html");
amanonagareIndexHtml.setAttribute("class", ".amanonagare_index_html");

const amanonagareIndexHtmlIntroduction = document.createElement("div");
amanonagareIndexHtmlIntroduction.setAttribute("id", "amanonagare_index_html_introduction");
amanonagareIndexHtmlIntroduction.setAttribute("class", "amanonagare_index_html_window");

const amanonagareIndexHtmlWritingPolicy = document.createElement("div");
amanonagareIndexHtmlWritingPolicy.setAttribute("id", "amanonagare_index_html_writing_policy");
amanonagareIndexHtmlWritingPolicy.setAttribute("class", "amanonagare_index_html_window");

const amanonagareIndexHtmlTodo = document.createElement("div");
amanonagareIndexHtmlTodo.setAttribute("id", "amanonagare_index_html_todo");
amanonagareIndexHtmlTodo.setAttribute("class", "amanonagare_index_html_window");

const amanonagareIndexHtmlIntroductionHead = document.createElement("h1");
amanonagareIndexHtmlIntroductionHead.setAttribute("id", "amanonagare_index_html_introduction_head");

const amanonagareIndexHtmlWritingPolicyHead = document.createElement("h1");
amanonagareIndexHtmlWritingPolicyHead.setAttribute("id", "amanonagare_index_html_writing_policy_head");

const amanonagareIndexHtmlWritingPolicyUl = document.createElement("ul");
amanonagareIndexHtmlWritingPolicyUl.setAttribute("id", "amanonagare_index_html_writing_policy_ul");

const amanonagareIndexHtmlWritingPolicyLi0 = document.createElement("li");
amanonagareIndexHtmlWritingPolicyLi0.setAttribute("id", "amanonagare_index_html_writing_policy_li_0");
const amanonagareIndexHtmlWritingPolicyLi1 = document.createElement("li");
amanonagareIndexHtmlWritingPolicyLi1.setAttribute("id", "amanonagare_index_html_writing_policy_li_1");
const amanonagareIndexHtmlWritingPolicyLi2 = document.createElement("li");
amanonagareIndexHtmlWritingPolicyLi2.setAttribute("id", "amanonagare_index_html_writing_policy_li_2");
const amanonagareIndexHtmlWritingPolicyLi3 = document.createElement("li");
amanonagareIndexHtmlWritingPolicyLi3.setAttribute("id", "amanonagare_index_html_writing_policy_li_3");
const amanonagareIndexHtmlWritingPolicyLi4 = document.createElement("li");
amanonagareIndexHtmlWritingPolicyLi4.setAttribute("id", "amanonagare_index_html_writing_policy_li_4");

const amanonagareIndexHtmlTodoHead = document.createElement("h1");
amanonagareIndexHtmlTodoHead.setAttribute("id", "amanonagare_index_html_todo_head");

const amanonagareIndexHtmlTodoUl = document.createElement("ul");
amanonagareIndexHtmlTodoUl.setAttribute("id", "amanonagare_index_html_todo_ul");

const amanonagareIndexHtmlTodoLi0 = document.createElement("li");
amanonagareIndexHtmlTodoLi0.setAttribute("id", "amanonagare_index_html_todo_li_0");
const amanonagareIndexHtmlTodoLi1 = document.createElement("li");
amanonagareIndexHtmlTodoLi1.setAttribute("id", "amanonagare_index_html_todo_li_1");
const amanonagareIndexHtmlTodoLi2 = document.createElement("li");
amanonagareIndexHtmlTodoLi2.setAttribute("id", "amanonagare_index_html_todo_li_2");

document.body.appendChild(amanonagareIndexHtml);
console.log("ok...");
amanonagareIndexHtml.appendChild(amanonagareIndexHtmlIntroduction);
amanonagareIndexHtmlIntroduction.appendChild(amanonagareIndexHtmlIntroductionHead);
amanonagareIndexHtmlIntroductionHead.append("Introduction");
amanonagareIndexHtmlIntroduction.append("なぜか、最近、私の周りでウェブサイトを立ち上げることが流行っているので、私も何かを書いてみることにした。");
amanonagareIndexHtml.appendChild(amanonagareIndexHtmlWritingPolicy);
amanonagareIndexHtmlWritingPolicy.appendChild(amanonagareIndexHtmlWritingPolicyHead);
amanonagareIndexHtmlWritingPolicyHead.append("Writing Policy");
amanonagareIndexHtmlWritingPolicy.appendChild(amanonagareIndexHtmlWritingPolicyUl);
amanonagareIndexHtmlWritingPolicyUl.appendChild(amanonagareIndexHtmlWritingPolicyLi0);
amanonagareIndexHtmlWritingPolicyUl.appendChild(amanonagareIndexHtmlWritingPolicyLi1);
amanonagareIndexHtmlWritingPolicyUl.appendChild(amanonagareIndexHtmlWritingPolicyLi2);
amanonagareIndexHtmlWritingPolicyUl.appendChild(amanonagareIndexHtmlWritingPolicyLi3);
amanonagareIndexHtmlWritingPolicyUl.appendChild(amanonagareIndexHtmlWritingPolicyLi4);
amanonagareIndexHtmlWritingPolicyLi0.append("AIを使わない");
amanonagareIndexHtmlWritingPolicyLi1.append("毎日1文字以上は更新する");
amanonagareIndexHtmlWritingPolicyLi2.append("サイトデザインにこだわらない");
amanonagareIndexHtmlWritingPolicyLi3.append("誠実に取り組む");
amanonagareIndexHtmlWritingPolicyLi4.append("単一責任の原則を重視する");
amanonagareIndexHtml.appendChild(amanonagareIndexHtmlTodo);
amanonagareIndexHtmlTodo.appendChild(amanonagareIndexHtmlTodoHead);
amanonagareIndexHtmlTodoHead.append("To-Do");
amanonagareIndexHtmlTodo.appendChild(amanonagareIndexHtmlTodoUl);
amanonagareIndexHtmlTodoUl.appendChild(amanonagareIndexHtmlTodoLi0);
amanonagareIndexHtmlTodoUl.appendChild(amanonagareIndexHtmlTodoLi1);
amanonagareIndexHtmlTodoUl.appendChild(amanonagareIndexHtmlTodoLi2);
amanonagareIndexHtmlTodoLi0.append("Typescriptを導入する");
amanonagareIndexHtmlTodoLi1.append("scriptで完全にhtmlを制御し、データとロジックを分離する");
amanonagareIndexHtmlTodoLi2.append("再起構造を導入する");