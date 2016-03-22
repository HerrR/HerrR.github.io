var TestUtils = React.addons.TestUtils;
var props, render, task, taskEl;

// To be run before each test
beforeEach(function(){
  // Mock meteor.
  MeteorStubs.install();
  // Create fake properties for the task component.
  props = {
    task: {
      _id: "taskId",
      text: "text",
      createdAt: new Date(),
      owner: "owner",
      username: "user",
      checked: false
    },
    showPrivateButton: false
  };
  // Create the render function.
  render = function(props){
    // Create the task
    task = React.addons.TestUtils.renderIntoDocument(
      React.createElement(Task, props)
    );
    // Fetch the task DOM element
    taskEl = ReactDOM.findDOMNode(task);
  };
});

// To be run after each test
afterEach(function(){
  // Remove meteor's mock.
  MeteorStubs.uninstall();
});

// Define a serie of tests.
describe("Task Component", function() {

  // Define a test.
  it("should display the task's text", function() {
    // Render the task.
    render(props);
    // Query the text content.
    var textContent = taskEl.querySelector(".text").textContent;
    // Test it!
    expect(textContent).toBe("user: text");
  });

  it("should be checked when specified", function() {
    // Update the default props.
    props.task.checked = true;
    // Render.
    render(props);
    // Test!
    var checkbox = taskEl.querySelector("input");
    expect(checkbox.checked).toBe(true);
  });

  it("should be unchecked when specified", function() {
    props.task.checked = false;
    render(props);
    expect(taskEl.querySelector("input").checked).toBe(false);
  });

  it("should call remove when the delete button is clicked", function(){
    // Update the task id.
    props.task._id = "foo";
    // Render as usual.
    render(props);
    // Intercept Meteor.call calls.
    spyOn(Meteor, "call");
    // Fetch the delete button.
    var deleteButton = taskEl.querySelector(".delete");
    // Simulate a click on it.
    TestUtils.Simulate.click(deleteButton);
    // Check if Meteor.call has been called with the proper arguments.
    expect(Meteor.call).toHaveBeenCalledWith("removeTask", "foo");
  });

  it("should call set checked when the checkbox is clicked", function(){
    props.task.checked = true;
    render(props);
    spyOn(Meteor, "call");
    TestUtils.Simulate.click(taskEl.querySelector("input"));
    // default task's id is defined as "taskId" in beforeEach.
    expect(Meteor.call).toHaveBeenCalledWith("setChecked", "taskId", false);
  });

});