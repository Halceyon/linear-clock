import 'cypress-real-events';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
import installLogsCollector from 'cypress-terminal-report/src/installLogsCollector.js';
installLogsCollector();
// Import commands.js using ES2015 syntax:
import './commands';
