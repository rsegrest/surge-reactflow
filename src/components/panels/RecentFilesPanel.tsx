import RecentFileRow from './RecentFileRow';
const RecentFilesPanel = (recentFileList:string[]) => {
    return (
        <div>
          <h1>Resource Files:</h1>
          {recentFileList.map((file:string) => {
            return <RecentFileRow filename={file} />
          })}
        </div>
    );
}
export default RecentFilesPanel;