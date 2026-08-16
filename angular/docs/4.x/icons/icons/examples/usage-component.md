```typescript
// app component (excerpt)

import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, brandSet } from '@coreui/icons';

@Component({...})
export class AppComponent {
  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };
  }
...
```
