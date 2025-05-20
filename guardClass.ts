type FileSourceClass = { type: "file"; path: string };
const fileSourceClass: FileSourceClass = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSourceClass = { type: "db"; connectionUrl: string };
const dbSourcClass: DBSourceClass = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type SourceClass = FileSourceClass | DBSourceClass;

function loadDataClass(source: SourceClass) {
  // if ('path' in source) {
  if (source.type === "file") {
    // source.path
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to database
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
}
