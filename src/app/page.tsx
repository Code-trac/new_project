
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Welcome to SkillSwap Connect
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        SkillSwap Connect is a vibrant platform designed to bridge the gap
        between students eager to learn and teachers passionate about sharing
        their knowledge. We foster a collaborative environment where free
        knowledge sharing is not just a concept but a reality. Whether you're a
        student looking to expand your skills, a teacher eager to share your
        expertise, or simply someone with a passion for learning, you've found
        the right place.
      </p>
      <div className="flex space-x-4">
        <img
          src="https://picsum.photos/400/200"
          alt="Learn"
          className="rounded-md shadow-sm object-cover"
          style={{ width: '400px', height: '200px' }}
        />
        <img
          src="https://picsum.photos/400/200"
          alt="Share"
          className="rounded-md shadow-sm object-cover"
          style={{ width: '400px', height: '200px' }}
        />
      </div>
    </div>
  );
}

