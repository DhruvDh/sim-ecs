import type {IAccessQuery, IComponentsQuery, IEntitiesQuery, TExistenceQuery} from "../query/query.spec";
import {EntitiesQuery} from "../query/entities-query";
import {ComponentsQuery} from "../query/components-query";
import type {TObjectProto} from "../_.spec";

export function queryComponents<DESC extends IAccessQuery<TObjectProto>>(query: DESC): IComponentsQuery<DESC> {
    return new ComponentsQuery(query);
}

export function queryEntities(...query: TExistenceQuery<TObjectProto>): IEntitiesQuery {
    return new EntitiesQuery(query);
}