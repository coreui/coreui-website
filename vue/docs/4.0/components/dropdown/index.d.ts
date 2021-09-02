import { App } from 'vue';
import { CDropdown } from './CDropdown';
import { CDropdownItem } from './CDropdownItem';
import { CDropdownHeader } from './CDropdownHeader';
import { CDropdownDivider } from './CDropdownDivider';
import { CDropdownMenu } from './CDropdownMenu';
import { CDropdownToggle } from './CDropdownToggle';
declare const CDropdownPlugin: {
    install: (app: App) => void;
};
export { CDropdownPlugin, CDropdown, CDropdownItem, CDropdownHeader, CDropdownDivider, CDropdownMenu, CDropdownToggle, };
