import * as vscode from 'vscode';
import { getProfileInfo, setConfiguration } from './utilities';


export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand("ze-ext.setConfiguration", () => setConfiguration()));

    context.subscriptions.push(vscode.commands.registerCommand("ze-ext.getProfileInfo", (node) => {
        if (node) {
            getProfileInfo(node);
        } else {
            console.log("node is empty");
        }
    }));

}