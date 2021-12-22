import { COLLAPSE } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    animations: [COLLAPSE],
})
export class AppComponent {
  title = 'error-message-if-login-failed';
}
