using Domain.Entities;
using Infrastructure.Persistence;
using MediatR;

namespace Application.Properties.Commands;

public class CreateProperty
{
    public class Command : IRequest<string>
    {
        public required Property Property { get; set; }
    }
    
    public class Handler(EstateChainDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            // not using async version as it will only be useful
            // we are getting a database-generated value
            context.Properties.Add(request.Property);
            await context.SaveChangesAsync(cancellationToken);
            
            // we're returning the ID because we generated the GUID in the Model
            // if we don't return the ID, we will have to generate GUID from Client-side
            return request.Property.Id;
        }
    }
}