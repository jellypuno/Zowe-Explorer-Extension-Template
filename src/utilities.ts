import * as vscode from 'vscode';
import { IZoweDatasetTreeNode } from "@zowe/zowe-explorer-api";

export async function setConfiguration () {

    vscode.commands.executeCommand("workbench.action.openSettingsJson");

}

export async function getProfileInfo (node: IZoweDatasetTreeNode ) {
    const profile = node.getProfile()
    console.log(profile);
}
