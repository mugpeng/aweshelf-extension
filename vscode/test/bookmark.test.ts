import assert from "node:assert/strict";
import test from "node:test";

import { groupBookmarks, AweshelfBookmark } from "../src/bookmark";

test("groupBookmarks groups by category and keeps uncategorized last", () => {
  const groups = groupBookmarks([
    {
      id: "aweshelf_0002",
      provider: "codex",
      session_id: "sess-002",
      title: "Write UI",
      category: "",
      project_path: "/tmp/project",
      bookmarked_at: "2026-05-21T10:00:00+00:00"
    },
    {
      id: "aweshelf_0001",
      provider: "claude",
      session_id: "sess-001",
      title: "Fix auth",
      category: "backend",
      project_path: "/tmp/project",
      aweswitch_profile: "cc-glm",
      bookmarked_at: "2026-05-20T10:00:00+00:00"
    }
  ]);

  assert.deepEqual(groups.map((group) => group.category), ["backend", "Uncategorized"]);
  assert.equal(groups[0].bookmarks[0].id, "aweshelf_0001");
  assert.equal(groups[1].bookmarks[0].id, "aweshelf_0002");
});

test("groupBookmarks preserves insertion order within a category", () => {
  const groups = groupBookmarks([
    {
      id: "aweshelf_0001",
      provider: "claude",
      session_id: "sess-001",
      title: "Older",
      category: "backend",
      project_path: "/tmp/project",
      bookmarked_at: "2026-05-20T10:00:00+00:00"
    },
    {
      id: "aweshelf_0002",
      provider: "claude",
      session_id: "sess-002",
      title: "Newer",
      category: "backend",
      project_path: "/tmp/project",
      bookmarked_at: "2026-05-21T10:00:00+00:00"
    }
  ]);

  assert.deepEqual(groups[0].bookmarks.map((b: AweshelfBookmark) => b.id), [
    "aweshelf_0001",
    "aweshelf_0002"
  ]);
});
