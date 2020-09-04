import {Segment} from "./connector/abstract-segment"
import {Component, RepaintOptions} from "./component/component"
import {PointArray, TypeDescriptor} from "./core"
import {Overlay} from "./overlay/overlay"
import {LabelOverlay} from "./overlay/label-overlay"
import {AbstractConnector} from "./connector/abstract-connector"
import {PaintStyle} from "./styles"
import {OverlayCapableComponent} from "./component/overlay-capable-component"
import {Endpoint} from "./endpoint/endpoint-impl"
import {Connection} from "./connector/connection-impl"

export interface Renderer {

    getPath(segment:Segment, isFirstSegment:boolean):string

    repaint(component:Component, typeDescriptor:string, options?:RepaintOptions):void

    paintOverlay(o: Overlay, params:any, extents:any):void
    addOverlayClass(o:Overlay, clazz:string):void
    removeOverlayClass(o:Overlay, clazz:string):void
    setOverlayVisible(o: Overlay, visible:boolean):void
    destroyOverlay(o: Overlay, force?:boolean):void
    updateLabel(o:LabelOverlay):void
    drawOverlay(overlay:Overlay, component:any, paintStyle:PaintStyle, absolutePosition?:PointArray):any
    moveOverlayParent(o:Overlay, newParent:any):void
    reattachOverlay(o:Overlay, c:OverlayCapableComponent):any
    setOverlayHover(o:Overlay, hover:boolean):any

    setHover(component:Component, hover:boolean):void

    paintConnector(connector:AbstractConnector, paintStyle:PaintStyle, extents?:any):void
    destroyConnection(connection:Connection, force?:boolean):void
    setConnectorHover(connector:AbstractConnector, h:boolean, doNotCascade?:boolean):void
    addConnectorClass(connector:AbstractConnector, clazz:string):void
    removeConnectorClass(connector:AbstractConnector, clazz:string):void
    getConnectorClass(connector:AbstractConnector):string
    setConnectorVisible(connector:AbstractConnector, v:boolean):void
    applyConnectorType(connector:AbstractConnector, t:TypeDescriptor):void

    applyEndpointType(ep:Endpoint, t:TypeDescriptor):void
    setEndpointVisible(ep:Endpoint, v:boolean):void
    destroyEndpoint(ep:Endpoint):void
    paintEndpoint(ep:Endpoint, paintStyle:PaintStyle):void
    addEndpointClass(ep:Endpoint, c:string):void
    removeEndpointClass(ep:Endpoint, c:string):void
    getEndpointClass(ep:Endpoint):string
    setEndpointHover(endpoint: Endpoint, h: boolean, doNotCascade?:boolean): void
    refreshEndpoint(endpoint:Endpoint):void

}
