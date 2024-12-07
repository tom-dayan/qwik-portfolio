import { component$, useSignal, $, useTask$, useOnWindow, useVisibleTask$ } from '@builder.io/qwik';
import "../global.css";
import { Button } from './ui/Button';
import { LuMenu, LuMoon, LuSunMoon } from '@qwikest/icons/lucide';
import { QAppBar } from '../integrations/react/AppBar';

// const drawerWidth = 240;
const navItems: [string, string][] = [
  ['Expertise', 'expertise'],
  ['Timeline', 'timeline'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

interface NavigationProps {
  mode: string;
  onModeChange$: () => void;
}
// : React.FC<NavigationProps> = ({ mode, onModeChange }) => {
export default component$<NavigationProps>(({ mode, onModeChange$ }) => {

  const mobileOpen = useSignal<boolean>(false);
  const scrolled = useSignal<boolean>(false);


  const handleDrawerToggle = $(() => {
    mobileOpen.value = !mobileOpen.value;
  });


    // useOnDocument(
    //     'mousemove',
    //     $((event) => {
    //       const { x, y } = event as MouseEvent;
    //       position.x = x;
    //       position.y = y;
    //     })
    //   );
    useVisibleTask$(() => {

        const handleScroll = () => {
        const navbar = document.getElementById('navigation');
        if (navbar) {
            scrolled.value = window.scrollY > navbar.clientHeight;
        }
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup(() => window.removeEventListener('scroll', handleScroll));
    })


  const scrollToSection$ = $((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${section}" not found.`);
    }
  });

  return (
    // <div style={{ display: 'flex' }}>
    //   {/* <CssBaseline /> */}
    //   <nav
    //     id="navigation"
    //     class={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
    //   >
    //     <div class="navigation-bar">
    <QAppBar client:visible scrolled={scrolled.value}>
        {/* Theme Toggle Icon */}
        {mode === 'dark' ? (
        <LuSunMoon onClick$={onModeChange$} />
        ) : (
        <LuMoon onClick$={onModeChange$} />
        )}

        {/* Navigation Links for Larger Screens */}
        <div>
        {navItems.map(([label, id]) => (
            <Button
            key={id}
            onClick$={$(() => scrollToSection$(id))}
            style={{ color: '#fff' }}
            >
            {label}
            </Button>
        ))}
        </div>
    </QAppBar>
    //     </div>
    //   </nav>
    // </div>
  );
});