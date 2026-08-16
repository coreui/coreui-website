- with standalone components:

```typescript
import { Tabs2Module } from '@coreui/angular';

@Component({
    selector: 'your-component',
    standalone: true,
    imports: [Tabs2Module]
})
export class YourComponent() { }
```


- with NgModules:

```typescript
import { Tabs2Module } from '@coreui/angular';

@NgModule({
    imports: [Tabs2Module]
})
export class YourModule() { }
```

