import * as vscode from 'vscode';
import { ZoweExplorerAPI } from './api/ZoweExplorerAPI';
import { ZoweExtendedUSSAPI } from './api/ZoweExtendedUSSAPI';
import { ZoweExtendedMVSAPI } from './api/ZoweExtendedMVSAPI';
import { ZoweExtendedJESAPI } from './api/ZoweExtendedJESAPI';
import { setConfiguration } from './utilities';

export let importedAPI: any;
export let registeredAPI: any;

export function activate(context: vscode.ExtensionContext) {
    vscode.commands.registerCommand("ze-ext.setConfiguration", () => setConfiguration());

    const zoweExplorerAPI = vscode.extensions.getExtension('zowe.vscode-extension-for-zowe');
	
    if (zoweExplorerAPI && zoweExplorerAPI.exports) {
        importedAPI = zoweExplorerAPI.exports.getExplorerExtenderApi();
        vscode.window.showInformationMessage('Zowe Explorer Extension Template has been activated successfully!');

        // registeredAPI = zoweExplorerAPI.exports as ZoweExplorerAPI.IApiRegisterClient;
        // registeredAPI.registerUssApi(new ZoweExtendedUSSAPI());
        // registeredAPI.registerMvsApi(new ZoweExtendedJESAPI());
        // registeredAPI.registerMvsApi(new ZoweExtendedJESAPI());

        return;
    } else {
        vscode.window.showErrorMessage('Error in activating Zowe Explorer Extension Template');
        return;
    }
}