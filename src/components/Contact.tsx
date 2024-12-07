import { component$, useSignal } from '@builder.io/qwik';
import { Button } from './ui/Button';
import { LuSend } from '@qwikest/icons/lucide';
import { Textarea } from './ui/Textarea';
import { Input } from './ui/Input';
import './styles/Contact.scss';

export const Contact = component$(() => {

  const name = useSignal<string>('');
  const email = useSignal<string>('');
  const message = useSignal<string>('');

  const formRef = useSignal<HTMLElement | undefined>(undefined);

  return (
    <div id="contact">
      <div class="items-container">
        <div class="contact_wrapper">
          <h4 style={{textAlign: 'center', marginBottom: '0.35em'}}>
            Contact Me
          </h4>
          <p style={{textAlign: 'center'}}>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>
          <form
            // component="form"
            ref={formRef}
            noValidate
            autocomplete="off"
            class="contact-form"
            // onSubmit$={(event) => (event.preventDefault())}
          >
            <div class="form-flex">
              <Input
                required
                type='name'
                // label="Your Name"
                placeholder="Your Name"
                value={name.value}
                bind:value={name}
                error={name.value ? '' : 'Please enter your name'}
                // helperText={formErrors.name ? 'Please enter your name' : ''}
              />
              <Input
                required
                type='email'
                // label="Email / Phone"
                placeholder="Email / Phone"
                value={email.value}
                bind:value={email}
                error={email.value ? '' : 'Please enter your email or phone number'}
                // helperText={formErrors.email ? 'Please enter your email or phone number' : ''}
              />
            </div>
            <Textarea
              required
              placeholder="Message"
              // multiline
              rows={4}
              value={message.value}
              bind:value={message}
              error={message.value ? '' : 'Please enter the message'}
              // helperText={formErrors.message ? 'Please enter the message' : ''}
              class="body-form"
            />
            <Button type="submit" class="submit-button">
              Send {<LuSend />}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
});
