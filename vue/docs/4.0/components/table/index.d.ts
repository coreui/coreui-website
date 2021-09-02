import { App } from 'vue';
import { CTable } from './CTable';
import { CTableBody } from './CTableBody';
import { CTableCaption } from './CTableCaption';
import { CTableDataCell } from './CTableDataCell';
import { CTableFoot } from './CTableFoot';
import { CTableHead } from './CTableHead';
import { CTableHeaderCell } from './CTableHeaderCell';
import { CTableRow } from './CTableRow';
declare const CTablePlugin: {
    install: (app: App) => void;
};
export { CTablePlugin, CTable, CTableBody, CTableCaption, CTableDataCell, CTableFoot, CTableHead, CTableHeaderCell, CTableRow, };
