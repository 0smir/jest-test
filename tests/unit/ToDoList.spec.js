import { mount } from "@vue/test-utils";
import ToDoList from "@/components/ToDoList.vue";


describe("ToDoList.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ToDoList);
  });

  it("should render toDo text", () => {
    const expected = /Learn\s+\w+/i;
    let todos = wrapper.findAll('[data-test="todo-item"]');
    //i have 3 started to do items so i need to iterate them
    todos.forEach(element => {
      expect(element.text()).toMatch(expected)
    });
    // expect(todos[0].text()).toBe("Learn Vue") //one more way to write test, but only for first item
  });


  it("should render new toDo item", async () => {
    let currentItemLength = wrapper.findAll('[data-test="todo-item"]').length;
    let expectedItemCount = currentItemLength + 1;

    expect(wrapper.findAll('[data-test="todo-item"]')).toHaveLength(currentItemLength);
    await wrapper.get('[data-test="new-todo-item"]').setValue('New todo');
    await wrapper.get('[data-test="form"]').trigger('submit');
    expect(wrapper.findAll('[data-test="todo-item"]')).toHaveLength(expectedItemCount);
  });

  it("should complite todo", async () => {
    await wrapper.get('[data-test="todo-item-checkbox"]').setValue(true);
    expect(wrapper.get('[data-test="todo-item"]').classes()).toContain('completed');
  })
})