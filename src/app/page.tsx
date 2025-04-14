
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Welcome to SkillSwap Connect
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        SkillSwap Connect is a platform designed to connect students and
        teachers, fostering a collaborative environment for free knowledge
        sharing. Whether you're a student looking to expand your skills or a
        teacher eager to share your expertise, you've found the right place.
      </p>
      <div className="flex space-x-4">
        <img
          src="https://picsum.photos/400/200"
          alt="Learn"
          className="rounded-md shadow-sm"
        />
        <img
          src="https://picsum.photos/400/200"
          alt="Share"
          className="rounded-md shadow-sm"
        />
      </div>
    </div>
  );
}
