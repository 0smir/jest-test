import { shallowMount, mount } from '@vue/test-utils';
import ParentComponent from '@/components/Parent.vue';

//shallowMount mean that you will test smth isolated. In this case it is parent component

describe("ParentComponent.vue", () => {
  it("Parent should exist", () => {
    const wrapper = shallowMount(ParentComponent);
    expect(wrapper.text()).toContain("Parent");
  });

  it("Child should exist", () => {

    //if you use mount that means that you can fall down till the target element and check it exists
    const wrapper = mount(ParentComponent);
    const childComp = wrapper.get('[data-test="test-child"]');
    expect(childComp.exists()).toBeTruthy();
  })
});