import { mount } from "@vue/test-utils";
import ToDoList from "@/components/ToDoList.vue";


describe("ToDoList.vue", () => {
  it("should render toDo text", () => {
    const expected = /Learn\s+\w+/i;
    const wrapper = mount(ToDoList);
    let todos = wrapper.findAll('[data-test="todo-item"]');
    //i have 3 started to do items so i need to iterate them
    todos.forEach(element => {
      expect(element.text()).toMatch(expected)
    });
    // expect(todos[0].text()).toBe("Learn Vue") //one more way to write test, but only for first item
  });

})