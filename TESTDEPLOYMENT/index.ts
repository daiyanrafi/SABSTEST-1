import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IInputs, IOutputs} from "./generated/ManifestTypes";
import HelloWorld from './HelloWorld';

export class TESTDEPLOYMENT implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private mContainer: HTMLDivElement;

    constructor()
    {

    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this.mContainer = container;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        ReactDOM.render(
            React.createElement(
                HelloWorld, context
            ),
            this.mContainer
        );
    }

    public getOutputs(): IOutputs
    {
        return {};
    }

    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }

}
