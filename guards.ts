type FileSource = { path: string };
const fileSource: FileSource = {
  path: "some/path/to/file.csv",
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  if ("connectionUrl" in source) {
    //source.connectionUrl=>to reach out to database
    return;
  }
  // source.path=>use that to open the file
}
