import { mount } from '@vue/test-utils';
import Navigation from '@/components/Nav.vue';


describe("Nav.vue", () => {
  it("renders a profile link", () => {
    //importent to remember: you should use name of mounted component!!! not file name!!
    //in this case file name Nav.vue, but component name: Navigation (!!!)
    //to avoid mistakes - use same file name and component name ;)
    const wrapper = mount(Navigation, {
      data() {
        return {
          isLoggedIn: true
        }
      }
    });
    const profileLink = wrapper.get("#profile");

    expect(profileLink.text()).toEqual("My profile");
  });

  it("should not renders a profile link", () => {
    const wrapper = mount(Navigation, {
      data() {
        return {
          isLoggedIn: false
        }
      }
    });

    const profileLink = wrapper.find("#profile");

    expect(profileLink.exists()).toBe(false);
  });
})