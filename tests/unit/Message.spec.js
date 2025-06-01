
import { mount } from '@vue/test-utils';
import Message from '@/components/Message';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(Message, {
      props: { msg }
    })
    expect(wrapper.text()).toContain(msg)
  })
})
