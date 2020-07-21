import * as vscode from 'vscode';
import { ZosmfSession } from '@zowe/cli';
import { importedAPI } from './extension';

export async function setConfiguration () {

    vscode.commands.executeCommand("workbench.action.openSettingsJson");

}

export async function getProfile (node: vscode.TreeItem) {
    return importedAPI.getExplorerExtenderApi().getProfile(node);
}

export async function getSession (node: vscode.TreeItem) {
    let session;
    const getProfileInfo = await importedAPI.getExplorerExtenderApi().getProfile(node);

	if (getProfileInfo) {
		session = await ZosmfSession.createBasicZosmfSession(getProfileInfo.profile);
		console.log('Creating Session for ', getProfileInfo.name);
	} else {
		vscode.window.showWarningMessage("Error in acquiring profile information");
    }

    return session;
}