// @flow
// This is an immutable Article using Flow
import {IApiModel} from '../Api/IApiModel';

export type Article = {
    +id: string;
    +title: string;
    +author: string;
}