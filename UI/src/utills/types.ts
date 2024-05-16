export type ArrayOfAppliances = Array<ListType>
export type ListType = {
    serialNo: string,
    theatreName: string,
    location: {
        city: String,
        state: String,
        country: String
    },
    bandwidth:string
    avgBandwidth: string,
    deviceStatus: string,
    downloadStatus: string,
    osVersion: string
    ispPaymentResponsibility: string
    planStartDate: string
    billingCycle: string
    storage: string,
    _id: string
}
export type DeviceTableProps = {
    appliances: ArrayOfAppliances,
    setViewAppliances: any
}
export type MonitoringStatusProps = {
    appliances: ArrayOfAppliances
}
export type NavLinksProps = {
    viewAppliance: string,
    setViewAppliances: any
}

export type DetailsProps = {
    viewAppliance: string
}