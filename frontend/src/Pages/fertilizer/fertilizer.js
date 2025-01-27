import React from "react";
import "./fertilizer.css";

function Fertilizer() {
  return React.createElement(
    "div",
    { className: "fertilizer-container" },
    React.createElement(
      "div",
      { className: "column-left" },
      React.createElement(
        "div",
        { className: "fertilizer-distribution" },
        React.createElement("h2", null, "Fertilizer Distribution"),
        React.createElement(
          "form",
          { className: "distribution-form" },
          React.createElement("label", null, "User Id"),
          React.createElement("input", { type: "text", placeholder: "User Id" }),
          React.createElement("label", null, "Date"),
          React.createElement("input", { type: "date", placeholder: "YYYY/MM/DD" }),
          React.createElement("label", null, "Fertilizer type"),
          React.createElement("input", { type: "text", placeholder: "Fertilizer type" }),
          React.createElement("label", null, "Fertilizer amount"),
          React.createElement("input", { type: "text", placeholder: "Fertilizer amount" }),
          React.createElement("label", null, "Price For 1 Fertilizer Kilo"),
          React.createElement("input", { type: "text", placeholder: "Price For 1 Fertilizer Kilo" }),
          React.createElement("label", null, "Total Price"),
          React.createElement("input", { type: "text", placeholder: "Total Price" }),
          React.createElement("button", { type: "submit", className: "submit-button" }, "Submit")
        )
      )
    ),
    React.createElement(
      "div",
      { className: "column-right" },
      React.createElement(
        "div",
        { className: "requests-section" },
        React.createElement(
          "div",
          { className: "requests-header" },
          React.createElement("h2", null, "Fertilizer Requests"),
          React.createElement("button", { className: "history-button" }, "History")
        ),
        React.createElement(
          "table",
          { className: "requests-table" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement("th", null, "User Id"),
              React.createElement("th", null, "User Name"),
              React.createElement("th", null, "Date"),
              React.createElement("th", null, "Fertilizer Type"),
              React.createElement("th", null, "Amount(Kilos)"),
              React.createElement("th", null, "To Confirm")
            )
          ),
          React.createElement(
            "tbody",
            null,
            Array.from({ length: 5 }).map((_, index) =>
              React.createElement(
                "tr",
                { key: index },
                React.createElement("td", null, "Test"),
                React.createElement("td", null, "Test"),
                React.createElement("td", null, "Test"),
                React.createElement("td", null, "Test"),
                React.createElement("td", null, "Test"),
                React.createElement(
                  "td",
                  null,
                  React.createElement("button", { className: "confirm-button" }, "To Confirm")
                )
              )
            )
          )
        )
      )
    )
  );
}

export default Fertilizer;

