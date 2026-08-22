import {CrewApp} from "../page";

const views={flights:"flights",absences:"absences",operations:"operations",management:"management",disciplinaries:"disciplinaries",leave:"loa"} as const;

export function generateStaticParams(){return Object.keys(views).map(view=>({view}));}

export default async function RoutedPage({params}:{params:Promise<{view:keyof typeof views}>}){
  const {view}=await params;
  return <CrewApp initialPage={views[view] ?? "dashboard"}/>;
}
