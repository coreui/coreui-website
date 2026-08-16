```ts
// standalone components
import { ProgressComponent, ProgressBarComponent } from '@coreui/angular';

@Component({
    standalone: true,
    imports: [ProgressComponent, ProgressBarComponent]
    // ...   
})
export class ...
```

```typescript
// ng modules
import { ProgressModule } from '@coreui/angular';

@NgModule({
    imports: [ProgressModule]
    // ...
})
export class ...
```

