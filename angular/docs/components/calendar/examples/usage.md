```ts
// standalone components
import { CalendarComponent } from '@coreui/angular';

@Component({
    standalone: true,
    imports: [CalendarComponent]
    // ...   
})
export class ...
```

```typescript
// ng modules
import { CalendarModule } from '@coreui/angular';

@NgModule({
    imports: [CalendarModule]
    // ...
})
export class ...
```
